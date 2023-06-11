import { Configuration, OpenAIApi } from 'openai';
import { Iform } from '@/types';
import { connectToDatabase } from '@/utils/database';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID
});

const openai = new OpenAIApi(configuration);

const getOpenAiPrompt = async (form:Iform) => {
    const { subject, description, style, graphics, quality } = form;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `I want you to act as a highly experienced photographer. You will use rich and highly artistic language when describing your photo prompts based on subject, description, style, graphics and quality from now on.
        ###
        subject: A village
        description: on christmas covered by snow
        style:modern
        graphics:unreal engine
        quality:8k
        prompt:Christmas village, magical, enchanting, wreaths, snow-covered streets, colorful buildings, sparkling, charming, detailed, glittery, shiny, twinkling lights, festive, ornate, traditional, whimsical, Christmastide, highly detailed, hyperrealistic, illustration, Unreal Engine 5,8K
        ###
        subject:${subject}
        description:${description}
        style:${style}
        graphics:${graphics}
        quality:${quality}
        prompt:
        `,
        max_tokens: 450,
        temperature: 0.7
    })
    return completion.data.choices[0].text;
}


export const POST =async (req:Request,res:Response) => {
    try {
        await connectToDatabase();
        const  form:Iform   = await req.json() ;
        const photos:string[] = [];
        const openAiEnhancedPrompt = await getOpenAiPrompt(form);
        const dalleRes = await openai.createImage({
            prompt: openAiEnhancedPrompt as string,
            n: form.numberOfImages,
            size: "512x512",
            response_format: 'b64_json',
        });
        dalleRes.data.data.map(({ b64_json }) => photos.push(b64_json as string));
        return new Response(JSON.stringify({photos,photo:photos[0],prompt:openAiEnhancedPrompt}), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response('Failed to generate image',{ status:500 })
    }
}