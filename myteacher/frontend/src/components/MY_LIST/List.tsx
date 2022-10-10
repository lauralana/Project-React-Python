import { ListStyled, 
    ListItems, 
    Photo, 
    Info, 
    Name, 
    Value, 
    Description  
} from "./list.style";
import { Button } from "@mui/material";

const List = () => {

return(
    <ListStyled>
        <ListItems>
            <Photo src="https://github.com/lauralana.png" alt="laura-profile-picture"></Photo>
            <Info>
                <Name> Laura Lana </Name>
                <Value> #### </Value>
                <Description> Life is a continue search for knowledge </Description>
                <Button> More Infos </Button>
            </Info>
        </ListItems>
    </ListStyled>
);

}

export default List;