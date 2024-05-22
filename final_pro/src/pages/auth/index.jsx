import * as React from "react";

function NavigationMenu() {
  return (
    <nav className="flex gap-5 my-auto max-md:flex-wrap">
      <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap">
        <div className="shrink-0 h-2.5 bg-teal-50 w-[124px]" />
        <div className="shrink-0 h-2.5 bg-teal-50 w-[100px]" />
        <div className="shrink-0 self-start bg-teal-50 h-[9px] w-[91px]" />
        <div className="shrink-0 self-start bg-teal-50 h-[9px] w-[116px]" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f4e682887dbe44e58d75eca7190817a93213577259a6e3c9b1eddafe38dc9cb?apiKey=8bf9233e86c34428ab6abba773017b1a&"
        alt=""
        className="shrink-0 aspect-square fill-teal-50 w-[23px]"
      />
    </nav>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col grow text-2xl text-center max-md:mt-10">
      <h1 className="self-center text-5xl font-bold text-cyan-950 max-md:text-4xl">
        Login
      </h1>
      <label htmlFor="emailInput" className="sr-only">
        Email ID
      </label>
      <input
        className="justify-center items-start px-7 py-4 mt-14 rounded-xl bg-neutral-200 text-zinc-500 max-md:px-5 max-md:mt-10"
        type="email"
        id="emailInput"
        placeholder="Email ID"
        aria-label="Email ID"
      />
      <label htmlFor="passwordInput" className="sr-only">
        Password
      </label>
      <input
        className="justify-center items-start px-7 py-4 mt-5 whitespace-nowrap rounded-xl bg-neutral-200 text-zinc-500 max-md:px-5"
        type="password"
        id="passwordInput"
        placeholder="Password"
        aria-label="Password"
      />
      <button
        type="submit"
        className="items-center px-16 pt-3.5 pb-2 mx-7 mt-14 text-3xl font-bold whitespace-nowrap bg-blue-500 rounded-3xl shadow-2xl text-slate-50 max-md:px-5 max-md:mx-2.5 max-md:mt-10"
      >
        Login
      </button>
      <div className="flex gap-3 self-center mt-16 max-md:mt-10">
        <span className="grow text-zinc-500">New user?</span>
        <a href="/register" className="font-bold underline capitalize text-slate-600">
          Register
        </a>
      </div>
    </form>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-slate-100">
      <header className="flex gap-5 justify-between px-12 py-4 w-full bg-blue-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="justify-center px-9 py-6 text-base font-black text-center text-gray-600 whitespace-nowrap bg-teal-50 rounded max-md:px-5">
          LOGO
        </div>
        <NavigationMenu />
      </header>
      <main className="self-center px-16 pt-20 pb-10 mt-40 max-w-full bg-white rounded-xl shadow-lg w-[1111px] max-md:px-5 max-md:mt-10">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <figure className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c785597295820957334efc29f0d478b22813610b3d06d5c88b9131b3b2b91ccb?apiKey=8bf9233e86c34428ab6abba773017b1a&"
              alt=""
              className="w-full aspect-[1.32] max-md:mt-10 max-md:max-w-full"
            />
          </figure>
          <article className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <LoginForm />
          </article>
        </section>
      </main>
    </div>
  );
}

export default MyComponent;