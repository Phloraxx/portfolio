import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import '../App.css'
import '../index.css'

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }} className="about-box">
      <Container maxWidth="md" className="about-container ssa">
        <Typography variant="h2" sx={{ mb: 3 }}>
          About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography className="ssa">
              I am a software engineer specializing in modern web development
              with React and the MERN stack. I enjoy building clean interfaces,
              reusable components, and scalable applications.
            </Typography>
            <Typography sx={{ mt: 2 }} className="ssa ">
              This is a dummy about section for your portfolio. You can update
              it with your academic profile, research interests, and teaching
              experience.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} width={1000}>
            <Paper sx={{ p: 2.5, borderRadius: 3 }} elevation={0} bgcolor="grey.100">
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Quick Info
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
               <b> Location:</b>  Thrissur
                <br />
                <b> Experience:</b>  3 years
                <br />
                <b> Focus:</b>  React, MERN, Data Science
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}