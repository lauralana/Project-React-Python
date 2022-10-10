import { ListStyled, 
    ListItems, 
    Photo, 
    Info, 
    Name, 
    Value, 
    Description  
} from "./list.style";
import { Button } from "@mui/material";

interface ListProps {
    professores: Professor[],
}

const List = (props: ListProps) => {

return(
    <ListStyled>
        {props.professores.map(professor => (
            <ListItems key={professor.id}>
            <Photo src={professor.photo} alt="laura-profile-picture"></Photo>
            <Info>
                <Name> {professor.name} </Name>
                <Value>
                    {professor.value.toLocaleString('pt-BR', 
                        { minimumFractionDigits: 2, style: 'currency',
                        currency:'BRL' })} 
                </Value>
                <Description> {professor.description} </Description>
                <Button sx={{ width:'70%' }}> More info about {professor.name} </Button>
            </Info>
        </ListItems>
        ))}
        
    </ListStyled>
);

}

export default List;