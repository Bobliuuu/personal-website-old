import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { projects } from '../constants/constants';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <h1 className="text-5xl text-center pt-10 pb-8 font-bold"> Projects</h1>
      <div>
        {projects.map(( project, idx ) => {
          return (
            <Accordion expanded={expanded === `panel${idx+1}`} onChange={handleChange(`panel${idx+1}`)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {project.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{project.caption}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {project.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}