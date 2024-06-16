import { Grid, Typography, Box, ThemeProvider, createTheme } from "@mui/material";
import "./News.css";

// Define custom theme
const theme = createTheme({
  typography: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeightBold: 600,
      },
      });

function News() {
    return (
      <>
    <ThemeProvider theme={theme}>
      <Box className="news-container">
        <Grid container spacing={2}>
          {/* Text section */}
          <Grid item xs={12} md={8}>
            <Box className="text-section">
              <Typography variant="h4" component="h2" gutterBottom sx={theme.typography.fontWeightBold}>
                Exciting Finish at the U.S. Open
              </Typography>
              <Typography variant="body1">
                In a thrilling conclusion to the U.S. Open, the world watched as top golfers competed head-to-head. With perfect swings and strategic plays, the tournament showcased why golf remains a captivating sport. The final putt on the 18th hole was a nail-biter, leading to a dramatic win by the underdog. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure debitis ratione recusandae accusantium? Hic itaque neque beatae eos dignissimos voluptatibus in blanditiis veritatis dicta nostrum, unde obcaecati corporis optio iusto numquam quo non voluptas adipisci atque, nulla sapiente magnam ad. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eveniet nam delectus dolore eius nobis. Ut corporis harum numquam dolore consequuntur eligendi quod? Sed libero deserunt excepturi nemo quam, ipsa facilis aut non, quae atque aliquam sit hic nisi modi odit, vel neque corrupti accusantium ex! Tempora asperiores, aliquam, totam reprehenderit quisquam nulla voluptas inventore quo quaerat illum odio harum earum eius possimus vel. At provident nostrum sunt esse vel voluptas odio corporis in repellendus sapiente quis beatae ipsam, dolor ab neque culpa quas obcaecati? Natus facere, culpa voluptatum at minima similique et quam eaque molestiae sit dolorem fugit possimus!
              </Typography>
            </Box>
          </Grid>

          {/* Image section */}
          <Grid item xs={12} md={4}>
            <Box className="image-section">
              <img
                src="https://cdn.pixabay.com/photo/2018/09/17/09/26/golf-3683337_1280.jpg"
                alt="Golf Tournament"
                className="image"
              />
            </Box>
          </Grid>

          {/* Video section */}
          <Grid item xs={12} md={4}>
            <Box className="video-section">
              <video width="100%" controls className="video">
                <source
                  src="https://cdn.pixabay.com/video/2024/05/22/213148_large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>

          {/* Video description */}
          <Grid item xs={12} md={8}>
            <Box className="description-section">
              <Typography variant="h4" component="h3" gutterBottom>
                Highlights from the Final Round
              </Typography>
              <Typography variant="body1">
                The video captures the highlights from the final round of the U.S. Open. It features the best moments, including impressive drives, precise putts, and the emotional reactions of the players. Watch as the golfers navigate the challenging course and demonstrate their exceptional skills under pressure. This video is a must-watch for any golf enthusiast, offering a glimpse into the excitement and intensity of the tournament.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    </>
  );
}

export default News;
