import {useXAgent, useXChat, Sender, Bubble} from '@ant-design/x';
import OpenAI from 'openai';

const client = new OpenAI({
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKey: 'sk-ccdf0991249a4f379cae09b1689a0b2f',
    dangerouslyAllowBrowser: true,
});

const Demo = () => {
    const [agent] = useXAgent({
        request: async (info, callbacks) => {
            const {messages, message} = info;

            const {onSuccess, onUpdate, onError} = callbacks;

            // current message
            console.log('message', message);

            // history messages
            console.log('messages', messages);

            let content = '';

            try {
                const stream = await client.chat.completions.create({
                    model: 'qwen-plus',
                    // if chat context is needed, modify the array
                    messages: [{role: 'user', content: message}],
                    // stream mode
                    stream: true,
                });

                for await (const chunk of stream) {
                    content += chunk.choices[0]?.delta?.content || '';

                    onUpdate(content);
                }

                onSuccess(content);
            } catch (error) {
                onError(error);
            }
        },
    });

    const {
        // use to send message
        onRequest,
        // use to render messages
        messages,
    } = useXChat({agent});

    const items = messages.map(({message, id}) => ({
        // key is required, used to identify the message
        key: id,
        content: message,
    }));

    return (
        <div>
            <Bubble.List items={items}/>
            <Sender onSubmit={onRequest}/>
        </div>
    );
};

export default Demo;
