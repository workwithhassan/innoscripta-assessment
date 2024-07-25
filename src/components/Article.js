import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

const Article = ({ title, description, imageUrl, url }) => {
  return (
    <Card>
      {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={url} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
            {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;