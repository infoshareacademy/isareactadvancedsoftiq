import Typography from "@mui/material/Typography";
import { PageWrapper } from "../../common/page-wrapper";

export const Home = () => {
  return (
    <PageWrapper>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Welcome to Burgers App!
      </Typography>
    </PageWrapper>
  );
};
