import React,{ useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Link from '@mui/material/Link';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import CreateIcon from '@mui/icons-material/Create';
import CodeIcon from '@mui/icons-material/Code';

import Typography from '@mui/material/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Project() {
  useEffect(() => {
      Aos.init({duration:1000});
  }, [])
  return (
    <div className='project-section' id='project'>
      <Typography variant="h1" component="h1">
            Milestone
          </Typography>
      <div data-aos='fade-up'>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="warning">
              <AirplanemodeActiveIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h4" component="span">
              Exchange year 
            </Typography>
            <Typography>Attend an culteral exchange student program of rotary youth exchange in Potsdam, Germany</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="secondary">
              <SportsSoccerIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              AC Cheer
            </Typography>
            <Typography>A Chief of Computer section in AC Cheer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="primary" >
              <SettingsOutlinedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Interact
            </Typography>
            <Typography>A member of Assumption College's Interact club</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="secondary">
              <LocalCafeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Krub's Cafe
            </Typography>
            <Typography>Programmer in Young business model project to create a cafe in Assumption College. </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="primary">
              <SettingsOutlinedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Interact
            </Typography>
            <Typography>President of Assumption College's Interact club</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h3" component="span">
              Space AC
            </Typography>
            <Typography>Join Space AC and train as a Programmer</Typography>
            <Typography>Website : <Link href="https://spaceac.net/" color="inherit">Space AC</Link></Typography>            
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              PASSENGER I
            </Typography>
            <Typography>Program a Cube Satelite for a high altitude balloon. To make a research in Air pollution</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="primary">
              <SettingsOutlinedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Interact
            </Typography>
            <Typography>Vice President at district 3350 Interact</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Passenger II
            </Typography>
            <Typography>Program a Cube Satelite for a high altitude balloon. To make a research in Air pollution</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="info">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h4" component="span">
              Retaehc discord bot
            </Typography>
            <Typography>Created a Discord bit using discord.py which can play music and games</Typography>
            <Typography>Invite link : <Link href="https://discordapp.com/oauth2/authorize?client_id=866184789811396649&scope=bot&permissions=8" color="inherit">RT.bot</Link></Typography>            
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }} />
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h3" component="span">
              CanSat Competition
            </Typography>
            <Typography>Programmer in SPOROS#3751. Won third place in overall score.</Typography>
            <Typography>Website : <Link href="https://spaceac.net/and-the-spore-has-landed/" color="inherit">SPOROS</Link></Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Oxygen Concentrators
            </Typography>
            <Typography>Design a 5liter oxygen Concentrators to help hospital during covid-19</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h3" component="span">
              IEEE 
            </Typography>
            <br />
            <Typography variant="h6" component="span">
              The Design of Auto-Rotating Payload for Relay-Based Telemetry and Sensor Scattering Applications
            </Typography>
            <Typography>After the cansat competition. SPOROS has an Idea to publish a research about auto rotating science payload.</Typography>
            <Typography>Website : <Link href="" color="inherit">IEEE</Link></Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }} />
            <TimelineDot color="success">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Hackaton
            </Typography>
            <Typography>Food buster#7 Create an Innovation to reduce food waste</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }} />
            <TimelineDot color="success">
              <CreateIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Thailand Innovation
            </Typography>
            <Typography>Create a Health Innovation with Innosafe team.</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h4" component="span">
              Rocket Development
            </Typography>
            <Typography>Develop a rocket using sugar-base fuel. Goal is to launch 10Km</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h3" component="span">
              ISTS
            </Typography>
            <br/>
            <Typography variant="h6" component="span">
              The Real-time Analysis of Air Pollution Concentration and Thermographic Photos Using Ordinary Least Square: A Cansat Project
            </Typography>
            <Typography>Publish a research about analysing air polution concentration relation with thermographoic Photos</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Genstem : Coding python 101 workshop
            </Typography>
            <Typography>Teach beginner python and fundamental programming for children under 16. Inspiring younger people to develop a programming skill in futher usage</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="info">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Finger number recognision
            </Typography>
            <Typography>Create a object recognision of each number raised in finger. Created by tensorflow zoo model</Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="info">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h4" component="span">
              React-Profile website
            </Typography>
            <Typography>this website is created with react!</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Genstem : Web developer
            </Typography>
            <Typography>One of web developer in the genstem group.</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
            <TimelineDot color="error">
              <WorkspacesIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'info.main' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Passenger III
            </Typography>
            <Typography>Program a Cube Satelite for a high altitude balloon. To make a research in Air pollution</Typography>
          </TimelineContent>
        </TimelineItem>
    </Timeline>
    </div>
    </div>
  );
}