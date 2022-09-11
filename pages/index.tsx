import type { NextPage } from "next";
import s from "./index.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";
import { TouchApp } from "@mui/icons-material";

const Home: NextPage = () => {
  function hireFormHandler(event: React.FormEvent) {
    event.preventDefault();
    alert("OK");
  }

  function createStoryHandler(event: React.FormEvent) {
    event.preventDefault();
    alert("OK");
  }

  return (
    <div className={s.root + "z-50"}>
      <Grid container className='font-europa'>
        <Grid
          container
          item
          className='bg-hero dark:bg-hero-dark max-w-7xl mx-auto'
        >
          <div className='flex w-full justify-center pt-12 pb-10 lg:pb-5 mb-4'>
            <h1 className='text-xl lg:text-2xl text-center w-[90%] sm:w-[444px] md:w-[480px] font-bold'>
              Not only see my journals, You can also share your own lovely story
              here
            </h1>
          </div>
          <div className='relative mb-5 mx-auto z-20 w-[330px] h-[250px] lg:w-[400px] lg:h-[365px]'>
            <Image src={"/hero.svg"} layout='fill' alt='share story images' />
          </div>
        </Grid>
        <Grid
          container
          item
          className='pb-8 bg-white dark:bg-slate-800 max-w-7xl mx-auto'
        >
          <form className='mx-auto mt-3' onSubmit={createStoryHandler}>
            <h2 className='text-center font-semibold mb-4'>
              Share Your Story Now
            </h2>
            <div className='flex flex-col md:flex-row w-[95%] mx-auto sm:w-[444px] md:w-[600px]'>
              <input
                type='text'
                className='basis-1/2 w-full dark:bg-slate-800 p-3 border-2 border-yellow-custom placeholder-opacity-50 dark:placeholder-opacity-80 placeholder-slate-900 dark:placeholder-slate-100 dark:border-blue-gray outline-none'
                placeholder='Your first story title'
              />{" "}
              <button
                type='submit'
                className='basis-1/2 p-3 border-2 border-transparent dark:text-sky-900 font-semibold bg-yellow-custom dark:bg-blue-gray  text-slate-900'
              >
                Create your first story
              </button>
            </div>
            <div className='text-center w-[90%] mx-auto sm:w-[444px] md:w-[600px] mt-9 py-10'>
              <blockquote className='md:text-lg'>
                &quot;The simple act of writing something down lets your brain
                know you want to remember it. That&apos;s why note-taking is
                such an effective practice when learning something new.&quot;
              </blockquote>
            </div>
          </form>
        </Grid>
        <Grid
          item
          container
          className='max-w-7xl mx-auto border-y bg-white dark:bg-slate-800'
        >
          <Grid item xs={12} md={6} className='md:border-rmd:py-20'>
            <div className='flex flex-col gap-5 w-[90%] md:w-[70%] border-b md:border-none py-10 mx-auto'>
              <h1 className='text-inconsolata font-bold text-lg md:text-xl'>
                Hi, I&apos;m Hadzami.
              </h1>
              <p>
                I&apos;m Computer Science Students at Gadjah Mada University
                entering my 3rd Semester and currently active contribute at
                HIMAKOM UGM and Software Reseacrh & Development Staff at
                Komatik.
              </p>
              <p>
                Currently, I&apos;m strongly dedicate my time for learning
                Fullstack Development with <strong>Next JS</strong> without
                forgetting my responsibilites as a Vice Project Officer of LDK
                MAKOMTI 2022 and Project Officer of MMIK Himakom 2022.
              </p>
              <p>
                In addition, recently I have also started a new habit of writing
                journals, essays, and reading insightful books. This new habit
                that encourages me to develop this beloved website.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="md:py-20">
            <div className='flex flex-col gap-5 w-[90%] md:w-[70%] py-10 mx-auto text-sm'>
              <div className='flex flex-col gap-2'>
                <h2 className='font-semibold text-lg md:text-xl mb-2'>
                  Read the latest journals:
                </h2>
                <article>
                  <h4 className='text-grayfont'>MACHINE LEARNING</h4>
                  <p className='underline'>
                    I started to be interest in studying data science
                  </p>
                </article>
                <article>
                  <h4 className='text-grayfont'>PUBLIC SPEAKING</h4>
                  <p className='underline'>
                    I need more hours to improve my public speaking
                  </p>
                </article>
                <article>
                  <h4 className='text-grayfont'>LOVE STORY</h4>
                  <p className='underline'>
                    I fall in deep love with my old father
                  </p>
                </article>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='font-semibold text-lg md:text-xl mt-4 mb-1'>
                  Browse my popular friend&apos;s story:
                </h2>
                <article className='underline'>
                  Hadzami from my prespective
                </article>
                <article className='underline'>
                  Jogja is special city that holds a lot of longing
                </article>
                <article className='underline'>
                  Baciro, Satria Mandala, and Duo Burjo
                </article>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container item className='dark:bg-slate-800'>
          <div className='w-full py-8 md:py-12'>
            <h1 className='text-center text-xl md:text-2xl font-semibold'>
              Get in Touch <TouchApp/>
            </h1>
          </div>
          <div className='w-full pb-10 bg-hero-bottom dark:bg-hero-dark-bottom'>
            <form
              className='w-[95%] md:w-[500px] mx-auto flex flex-col gap-2'
              onSubmit={hireFormHandler}
            >
              <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='border-2 bg-transparent border-yellow-custom dark:border-blue-gray w-full outline-none py-1 px-2'
                  placeholder='Achmad Hadzami Setiawan'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  id='phone'
                  className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
                  placeholder='+628123456789'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
                  placeholder='hadzami@example.com'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='institution'>Institution/Organization</label>
                <input
                  type='text'
                  id='institution'
                  className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2'
                  placeholder='XYZ Universitas Gadjah Mada'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='text'>Additional Information</label>
                <textarea
                  id='text'
                  className='bg-transparent border-2 border-yellow-custom dark:border-blue-gray w-full outline-none p-1 px-2 h-40'
                  placeholder='I will hire your for position x with jobdesc y'
                />
              </div>
              <button
                type='submit'
                className='bg-yellow-custom dark:bg-blue-gray p-2 dark:text-sky-900 font-bold rounded-sm mt-2'
              >
                Send to Hadzami
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
