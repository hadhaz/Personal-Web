import { Grid } from "@mui/material";

const faq = [
  {
    id: "q1",
    question: "What is the Fab?",
    answer:
      "Fab stands for Floating Button Icon, You can add that button for change theme (dark mode and light mode) easily.",
  },
  {
    id: "q2",
    question: "How I can give you feedback?",
    answer: "For temporary, you can reach me on my twitter @HadzamiS. I will add FAQ feature in this website soon.",
  },
  {
    id: "q3",
    question: "Can my question appear here?",
    answer: "Yes, I will answer your question and show here.",
  },
  {
    id: "q4",
    question: "Why I can't find the content of works, journals, and resume?",
    answer: "Sorry, those feature is still under development. Thanks for your understanding.",
  },
  {
    id: "q5",
    question: "Why I can't login/register?",
    answer: "Sorry, those feature is still under development.",
  },
];

const Help: React.FC = () => {
  return (
    <Grid container className='p-16 gap-4' rowSpacing={4}>
      {faq.map(item => {
        return (
          <Grid container key={item.id} className='border p-2 gap-1'>
            <Grid item xs={12} className='p-0'>
              <h2>Question:</h2>
              <p>{item.question}</p>
            </Grid>
            <Grid item xs={12}>
              <h3>Answer:</h3>
              <p>{item.answer}</p>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Help;
