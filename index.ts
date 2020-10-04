export const handler = async (event: any): Promise<any> => {
    console.log(`Event Payload: ${JSON.stringify(event)}`);
    console.log('Hello World!');
    return 'Hello World!';
};
