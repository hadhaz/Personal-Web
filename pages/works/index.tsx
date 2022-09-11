import { Grid } from "@mui/material";
import Link from "next/link";

const WorksPage: React.FC = () => {
  return (
    <Grid container>
      <Grid container item className='justify-center'>
        <h1 className='text-lg md:text-xl font-semibold mb-4'>
          13 MIPA Quotes
        </h1>
        <embed
          type='text/html'
          src='https://13-mipa.vercel.app'
          width={"90%"}
          height={440}
        ></embed>
        <div className='md:max-w-xl px-5 mt-6 py-1 flex flex-col gap-3'>
          <p className='text-center text-2xl font-bold'>
            A website that allows anyone to share their thought and quotes. You
            can also add a comment for specifics quotes.
          </p>
          <p className='text-center'>
            <Link href='https://13-mipa.vercel.app'>
              <strong className='underline underline-offset-4'>
                https://13-mipa.vercel.app
              </strong>
            </Link>
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default WorksPage;
