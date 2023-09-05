// Network Call Code

export default async function doNetworkCall() {
    const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';
    try {
        const response = await fetch(URL);
        const obj = await response.json();
        console.log('Object is ', obj);
        return obj;
        // if we use promise then it becomes callback hell
    } catch (err) {
        throw err;
    }
}
