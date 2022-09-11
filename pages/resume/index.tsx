import Image from "next/image";
import { LinkedIn, Twitter, Instagram, GitHub } from "@mui/icons-material";
import Link from "next/link";
const ResumePage: React.FC = () => {
  return (
    <div className='bg-resume-mobile md:bg-resume py-6 max-w-7xl mx-auto'>
      <div className='flex-col md:flex-row gap-6 md:gap-0 flex text-black justify-center items-center mx-auto w-[350px] md:w-auto min-h-screen'>
        <div className='bg-[#f4ece6] w-[350px] pt-12 flex flex-col shadow-xl items-center'>
          <div className='relative mb-4 w-40 h-40 mx-20'>
            <Image
              layout='fill'
              src={"/hadzami.png"}
              alt='achmad hadzami setiawan'
            />
          </div>
          <div className='mt-4 mb-4'>
            <h1 className='text-2xl font-extrabold overflow-y-hidden w-32 text-center leading-7 h-fit'>
              Hadzami Setiawan
            </h1>
            <div className='w-[50%] border-b mt-4 border-blue-700 mx-auto'></div>
          </div>
          <blockquote className='tracking-wider text-lg'>
            Web Developer
          </blockquote>
          <div className='flex items-center justify-center gap-6 bg-white w-full mt-6 py-3'>
            <Link href=''>
              <LinkedIn fontSize='small' />
            </Link>
            <Link href=''>
              <GitHub fontSize='small' />
            </Link>
            <Link href=''>
              <Twitter fontSize='small' />
            </Link>
            <Link href=''>
              <Instagram fontSize='small' />
            </Link>
          </div>
        </div>
        <div className='md:px-10 px-3 flex flex-col w-[350px] md:gap-2 py-5'>
          <h1 className='text-7xl font-extrabold overflow-y-hidden py-5'>
            Hello
          </h1>
          <p className='text-lg'>Here&apos;s who I am & what I do</p>
          <a href='/assets/CV_Achmad Hadzami Setiawan.pdf' download>
            <button className='bg-blue-600 hover:bg-white border-2 hover:border-blue-600 border-transparent hover:text-blue-600 text-center font-bold rounded-md py-[5px] my-3 w-fit px-3 text-[13px] text-white font-sans'>
              Resume
            </button>
          </a>
          <blockquote className='mt-4 text-sm flex flex-col gap-2'>
            <div>
              I&apos;m a Computer Science Students who is extremely passionate
              with Web Development, Data Science, and Philosophy. Currently, I
              deliberate practice my self on{" "}
              <strong>Full Stack Development</strong> using Next JS.
            </div>
            <div>
              I also active contribute at HIMAKOM UGM and Software Reseacrh &
              Development Staff at Komatik.
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
