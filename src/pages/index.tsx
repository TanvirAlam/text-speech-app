import { type NextPage } from "next";
import Head from "next/head";
import { useSpeechSynthesis } from "react-speech-kit";

import { HiSpeakerphone } from 'react-icons/hi';
import { FaPlayCircle } from 'react-icons/fa';
import { SiConvertio } from 'react-icons/si';
import { useState } from "react";

const Genders = ["Select Gender", "Male", "Female"]

const Home: NextPage = () => {
  const [Text, setText] = useState("")
  const [gender, setGender] = useState<string | undefined>(Genders[0])
  const { speak } = useSpeechSynthesis()

  return (
    <>
      <Head>
        <title>Text To Speech App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-extrabold leading-normal text-gray-700 md:text-[2rem]">
          Text-<span className="text-purple-300">Speech</span>-App
        </h1>
        <form>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                  <textarea 
                    id="editor" 
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                    className="block px-4 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                    placeholder="Write to convert to speach..." 
                    required></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                      <div className="flex items-center space-x-1">
                          <button 
                            type="button" 
                            onClick={(e) => speak({text: Text})}
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                              <FaPlayCircle />
                              <span className="sr-only">Attach file</span>
                          </button>
                      </div>
                      <div className="flex items-center space-x-1">
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <SiConvertio />
                              <span className="sr-only">Convert</span>
                          </button>
                      </div>
                      <div className="flex items-center space-x-1">
                          <button type="button" className="flex items-center gap-2 p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <HiSpeakerphone />
                              <span className="text-xs">Start Speaking</span>
                          </button>
                      </div>
                      <div>
                        <select 
                          value={gender}
                          onChange={(e) => setGender(e.target.value)} 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                              Genders.map((gender, key) => {
                                return (<option key={key} value={gender}>{gender}</option>)
                              })
                            }
                        </select>
                      </div>
                  </div>
              </div>
              <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                  <h4 className="text-gray-700 font-bold">Converted ssmlText:</h4>
                  <div>Data</div>
              </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Home;
