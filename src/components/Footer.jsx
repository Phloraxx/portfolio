import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="footer-items" >
        <Typography variant="body2">
          © {new Date().getFullYear()} Sourav P Bijoy. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            href="https://github.com/Phloraxx"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "grey.100" }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            href="https://in.linkedin.com/in/souravpbijoy"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "grey.100" }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
      </div>
  );
}