import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Info from "./Info";

const UserForm = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
    subject: "",
  });

  const clean = () => {
    setUserInput(() => {
      return {
        name: "",
        subject: "",
        email: "",
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    clean();
    sendEmail();
  };

  const valuChange = ({ target: { name, value } }) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  function sendEmail() {
    console.log("send");
  }

  return (
    <>
      <Info />

      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl drop-shadow-2xl space-y-8 selection:bg-fuchsia-300 selection:text-fuchsia-900">
            <div className="flex flex-row flex-nowrap space-x-6">
              <div className="flex-1 basis-1/3">
                <span className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  From
                </span>
                <input
                  type="text"
                  className="w-full bg-gray-900 block rounded-md border-0 text-violet-200/75 ring-1 ring-fuchsia-600 sm:text-sm sm:leading-4"
                  value="blabbermouth@gmail.com"
                  disabled
                />
              </div>
              <div className="flex-1 basis-1/2">
                <span className="block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  To
                </span>
                <input
                  type="email"
                  name="email"
                  value={userInput.email}
                  onChange={valuChange}
                  autoComplete="off"
                  className="w-full bg-gray-900 block rounded-md border-0 text-indigo-100 ring-1 ring-fuchsia-600 placeholder:text-gray-400/50 sm:text-sm sm:leading-4"
                  placeholder="dr.afshar@example.com"
                />
              </div>
            </div>
            <h3 className="text-white mt-5 text-base font-medium tracking-tight"></h3>
            <div className="flex items-center border-b border-purple-500 py-2">
              <span className="block text-bg font-medium text-violet-200">
                Subject:
              </span>
              <input
                type="text"
                value={userInput.subject}
                onChange={valuChange}
                autoComplete="off"
                name="subject"
                className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight text-violet-200 focus:outline-none"
                aria-label="Subject"
                placeholder="blabbermouth"
              />
            </div>

            <section className="text-violet-200/75 leading-loose" dir="rtl">
              <span>سلام</span>
              <span>
                <div className="relative mt-2 rounded-md px-2 inline-block">
                  <input
                    type="text"
                    value={userInput.name}
                    onChange={valuChange}
                    autoComplete="off"
                    name="name"
                    className="w-48 bg-gray-900 block w-full rounded-md border-0 text-indigo-100 ring-1 ring-fuchsia-600 placeholder:text-gray-400/50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                    placeholder="افشار آقا"
                  />
                </div>
              </span>
              <span>،</span>
              <br />
              <p>
                امیدوارم سلامت باشی و توهین یا ناراحتی خودت نبینی محتویات این
                ایمیل رو؛ &nbsp;
                <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  من نیاز به تمرکز دارم.
                </b>
              </p>
              <p>
                <a className="underline underline-offset-4 decoration-sky-500">
                  شما خیلییی صحبت می‌کنی و دائما حواسم پرت می‌شه.
                </a>
                &nbsp; از اینکه نمیتونم هم بهت بگم &nbsp;
                <a className="underline underline-offset-4 decoration-purple-500">
                  کمتر صحبت کن
                </a>
                &nbsp; بیشتر حواسم پرت می‌شه.
              </p>
              <p>
                من رو تو چرخه &nbsp;
                <a className="underline underline-offset-4 decoration-purple-500">
                  حواس‌پرتی
                </a>
                &nbsp; می‌ندازی.
              </p>
              <p>
                احتمالا برای روزهای اول سخته، اما بیا حداقل &nbsp;
                <a className="underline underline-offset-4 decoration-indigo-500">
                  این هفته
                </a>
                &nbsp; اعصابم رو راحت بذار =)
              </p>

              <p>ممنون از درک شما.</p>
            </section>

            <section className="flex text-violet-200">
              <div className="flex-1">
                <button className="py-2 px-4 bg-slate-950 font-semibold rounded-lg shadow-md hover:bg-purple-500">
                  Send now
                </button>
              </div>
              <div className="left-0">
                <button onClick={clean}>
                  <TrashIcon
                    className="block h-6 w-6 hover:text-purple-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
