import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;

`

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 15px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    width: 100%;
    border-radius: 0;
    padding-left: 10px;
`

const Button = styled.button`
    border: none;
    padding: 8px 15px;
    background-color: teal;
    color: #fff;
`


const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get Updates for Future Discounts & About Your Favourite Products</Description>
            <InputContainer>
                <Input placeholder="Enter Your E-mail ..." />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
