# NextGenVisions
![nextgenvisions](/public/image.png)

[nextgenvisions](https://next-gen-visions.vercel.app/) is an image generation platform built on top of dalle2 and openai api that generates the prompt for dalle2 to generate images based on the your input and uses those prompts to generate images using dalle2.

## Tech stacks
- nextjs
- reactjs
- cloudinary ( for image store)
- file saver ( to save file on computer)
- typescript
- openai api (dalle2 and chat completetion to get prompt)
- typescript
- tailwindcss
- mongodb

### Setup in local machine
- Clone this repository using command 
```bash 
git clone https://github.com/Iamsidar07/NextGenVisions.git
```
- Change your current directory to the project folder using command 
```bash
cd NextGenVisions
```
- rename ```.env.example``` to ```.env.local``` and fill all the properties
```bash
MONGODB_URI=
OPENAI_API_KEY=
OPENAI_ORGANIZATION_ID=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRETE_KEY=
```
- To install dependencies run command 
```bash
npm install
```
- To see your project run command
```bash
npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
