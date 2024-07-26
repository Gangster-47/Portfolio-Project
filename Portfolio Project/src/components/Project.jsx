import React from "react";
import { Box, Paper, Stack } from "@mui/material";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function Project() {
  return (
    <div className="gradient-background3 ">
      <div className="text-white text-7xl text-center mb-3">My Projects</div>
      <div className="flex gap-x-3 px-28 py-16">
        <Stack direction="row" gap={12}>
          <Box width="350px">
            <Card elevation={5} className="card_component">
              <CardMedia
                component="img"
                height="150px"
                image="..\public\escape the worldd.png"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  ESCAPE THE WORLD
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "3px" }}
                >
                  This game consists of 3 Different Levels with 3 Different
                  kinds of world where your task is to reach to the end to clear
                  your level. Hope you will enjoy!!
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://gangster47yash-rautela.itch.io/escape-the-world" size="small">Check Out</Button>
              </CardActions>
            </Card>
          </Box>
          <Box width="350px">
            <Card elevation={5} className="card_component">
              <CardMedia
                component="img"
                height="150px"
                image="..\public\amazon clone.png"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  AMAZON CLONE
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "3px" }}
                >
                  I have tried to make a clone of Amazon Website. The website showcases the
                  frontend part of Amazon majorly its Home Page, its cart page and the product
                  page. Hope you will like it!!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Check Out</Button>
              </CardActions>
            </Card>
          </Box>
          <Box width="350px">
            <Card elevation={5} className="card_component">
              <CardMedia
                component="img"
                height="100px"
                image="..\public\flappybirrd.png"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  FLAPPY BIRD 2.0
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "3px" }}
                >
                  This game is kind of remake of the OG game that you all must
                  have played in your childhood, "Flappy Bird" but with a new
                  tadka of difficulty, rage and anger. Hope you will enjoy!!
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://gangster47yash-rautela.itch.io/flappy-bird-20" size="small">Check Out</Button>
              </CardActions>
            </Card>
          </Box>
        </Stack>
      </div>
    </div>
  );
}

export default Project;
