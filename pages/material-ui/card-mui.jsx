import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";

function CardPage() {
  return (
    <div>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="100px"
          image="/images/me.jpg"
          alt="green iguana"
        />
        <CardContent>
          <p>Mr. Phonesavan</p>
          <p>RASABANDITH</p>
          <p>age</p>
          <p>address</p>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small">Share</Button>
          <Button size="small" color="warning">
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardPage;
