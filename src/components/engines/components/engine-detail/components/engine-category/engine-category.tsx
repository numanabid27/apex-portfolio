import { Grid, Typography } from "@mui/material";
import { CategorySectionStyle } from "../engine-category/category-section.style";
import Link from "next/link";

export default function EngineCategory() {
  return (
    <Grid item lg={6}>
      <Typography sx={CategorySectionStyle.category}>
        <Link href="/engines">Engines</Link>
        <strong className="font-weight-bold"> / Azure OpenAI General</strong>
      </Typography>
    </Grid>
  );
}
