import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    opacity: 0;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-height: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    cursor: pointer;

    &:hover ${Info}{
        opacity: 1;
    }

`
 
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({prodItem}) => {
    return (
        <Container>
            <Circle />
            <Image src={prodItem.img} alt="product image"/>
            <Info>
                <Icon><ShoppingCartOutlined /> </Icon>
                <Icon><SearchOutlined /> </Icon>
                <Icon><FavoriteBorderOutlined /> </Icon>
            </Info>
        </Container>
    )
}

export default Product
