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
    name: "Marcela",
    photo: "https://github.com/marcelamchdo.png",
    description: "All me in this house",
    value: 100,
  },
  {
    id: 3,
    name: "Raynara",
    photo: "https://github.com/raynarastg.png",
    description: "I'm a shit woman, só quero extorquir seu dinheiro",
    value: 500,
  },
  {
    id: 4,
    name: "Daniel",
    photo: "https://github.com/danielrubens.png",
    description: "The Life Snake",
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