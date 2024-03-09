export async function fetchData(graphql: string) {
    const craftUrl = process.env.CRAFT_URL;

    if (!craftUrl) {
        throw new Error('CRAFT_URL is not defined');
    }

    const res = await fetch(craftUrl, {
        method: 'post',
        body: graphql,
        headers: {
            'Content-Type': 'application/graphql',
        },
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error(`Response status: ${res.status}, body: ${errorText}`);
        throw new Error('Failed to fetch API');
    }

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}
