import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar"
import Announcement from "../components/Announcement/Announcement"
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const ProductDesc = styled.div`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
 `

const FilterTitle = styled.div`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    /* border-radius: 10px; */
    border-top: 1px solid teal;
    border-bottom: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    `

const Icon = styled(Amount)`
    border: 1px solid teal;
    cursor: pointer;

    &:hover{
        color: #FFF;
        background-color: teal;
    }
`

const Button = styled.button`
    padding: 10px 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    transition: all ease 0.3s;

    &:hover{
        color: #fff;
        background-color: teal;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>

            <ImgContainer>
                <Image src="https://picsum.photos/1000/1000" alt="product image"/>
            </ImgContainer>

            <InfoContainer>
                <Title>Jean Jumpsuit</Title>
                <ProductDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis.</ProductDesc>
                <Price>$20</Price>

            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
                
            </FilterContainer>

            <AddContainer>
                <AmountContainer>
                    <Icon>
                    <Remove />
                    </Icon>
                        
                    <Amount>1</Amount>
                    <Icon>
                    <Add />
                    </Icon>
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>


            </InfoContainer>

            </Wrapper>


            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
