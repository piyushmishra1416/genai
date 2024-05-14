import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import icon from "@/assets/Icon.svg"
import Image from 'next/image';
import { Inter } from 'next/font/google';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 360, borderRadius: 5, height: 282}}>
      <CardActionArea sx={{ margin: 2.5}}>
        <Image
         src={icon}
          alt="green iguana"
          className='mb-[9.5%] mt-[1.5%]'
        />
        <CardContent sx={{marginRight: 4}} >
          <Typography gutterBottom variant="h5" component="div" fontWeight={600} style={{ fontFamily: 'Inter' }}>
            Quality apps
          </Typography>
          <Typography sx={{fontSize: 16, color: "#374151", fontFamily:'Inter'}}  >
          Identify strengths, capitalize on
weaknesses, and chart a course for
unparalleled success.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
