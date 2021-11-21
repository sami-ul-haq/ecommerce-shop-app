import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 4px;
    height: 70vh;
    position: relative;
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: none;
    padding: 20px;
    background-color: #fff;
    color: gray;
    font-weight: bold;
    cursor: pointer;
`

const CategoryItem = ({cat}) => {
    return (
        <Container>
            <Image src={cat.img} alt="category-image" />
            <Info>
                <Title>{cat.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
