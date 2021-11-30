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

import Aos from 'aos';
import 'aos/dist/aos.css';
import "./milestone.css"

export default function Milestone() {
  useEffect(() => {
      Aos.init({duration:1000});
  }, [])
  return (
    <div className='milestone-section' id='milestone'>
      <h1>Milestone</h1>
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
            <h2>
              Exchange year 
            </h2>
            <p>in Potsdam, Germany</p>
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
            <h2>
              AC Cheer
            </h2>
            <p>Chief Programmer</p>
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
            <h2>
              AC Interact Club
            </h2>
            <p>Member</p>
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
            <h2>
              Krub's Cafe 
            </h2>
            <p>Programmer</p>
            <details>Young Buisiness model for Assumption College Student</details>
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
            <h2>
              AC Interact Club
            </h2>
            <p>President</p>
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
            <a href="https://spaceac.net/"><h2>Space AC</h2></a>
            <p>Vice president</p>            
            <p>Chief Programmer</p>            
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
            <h2>PSG I</h2>
            <p>Programmer</p>
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
            <h2>
            District 3350 Interact
            </h2>
            <p>Vice President</p>
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
            <h2>
              PSG-II
            </h2>
            <p>Programmer</p>
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
            <h2>
              RT.bot
            </h2>
            <p>Owner</p>
            <p>Invite link:<Link href="https://discordapp.com/oauth2/authorize?client_id=866184789811396649&scope=bot&permissions=8" color="inherit">RT.bot</Link></p>            
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
            <h3>CanSat Competition</h3>
            <a href="https://spaceac.net/and-the-spore-has-landed/"><p>SPOROS#3751</p></a>
            <p>Programmer</p>
            <p>Won Third place </p>
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
            <h2>
              Hackaton
            </h2>
            <p>FoodBuster</p>
            <p>AI DEV</p>
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
            <h2>Thailand Innovation</h2>
            <p>Programmer</p>
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
            <h2>Rocket DEV</h2>
            <p>Programmer</p>
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
            <h2>ISTS Journal</h2>
            <details>
              The Real-time Analysis of Air Pollution Concentration and Thermographic Photos Using Ordinary Least Square: A Cansat Project
            </details>
            <p>First Auther</p>
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
            <h2>
              Genstem Coding python 101 workshop
            </h2>
            <details>Teach beginner python and fundamental programming for children under 16. Inspiring younger people to develop a programming skill in futher usage</details>
            <p>Staff</p>
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
            <h2>
              React-Profile website
            </h2>
            <p>Owner of this Amazing web</p>
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
            <h2>
              Genstem Web developer
            </h2>
            <p>Front-end developer</p>
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
            <h2>
              PSG-III
            </h2>
            <p>Programmer</p>
          </TimelineContent>
        </TimelineItem>
    </Timeline>
    </div>
    </div>
  );
}