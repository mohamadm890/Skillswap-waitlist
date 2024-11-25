export async function CallApiwithPromot(promot) {

    try {
        const fetch =  fetch('/api/generate', {
            method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
        })

        if (!fetch.ok) {
            throw new Error('Failed to fetch data');
        } else {
            return  await response.json();
        }
         
    } catch(error) {
        console.error('API call error:', error);
        throw error;
    }
}