import { SignIn, SignInButton,  SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";


import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user= useUser();
  const {data} = api.posts.getAll.useQuery()
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
     
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      <div >
        {!user.isSignedIn && <SignInButton />} 
        {/* {!!user.isSignedIn && <SignOutButton/> } */}
      </div>
      <div>
        {data?.map((post) => (<div key= {post.id}>{post.content}</div>))}
      </div>
     
      </main>
    </>
  );
};

export default Home;
