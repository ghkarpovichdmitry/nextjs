export async function getPost(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error('Fetching error');

    return response.json();
}
