import type { NextPage } from 'next';
import { Professor } from '../src/@types/professor';
import { Box } from '@mui/material';
import List from '../src/components/MY_LIST/List';

const Home: NextPage = () => {
const professores: Professor[] =[
  {
    id: 1,
    name: "Laura",
    photo: "https://github.com/lauralana.png",
    description: "Life is a continue search for knowledge",
    value: 100,
  },
  {
    id: 2,
    name: "Lygia",
    photo: "https://github.com/lauralana.png",
    description: "Life is a continue search for knowledge",
    value: 300,
  },
  {
    id: 3,
    name: "Silvia",
    photo: "https://github.com/lauralana.png",
    description: "Life is a continue search for knowledge",
    value: 100,
  },
  {
    id: 4,
    name: "Joelma",
    photo: "https://github.com/lauralana.png",
    description: "Life is a continue search for knowledge",
    value: 200,
  },
]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List professores={ professores }/> 
    </Box>
  )
}

export default Home;