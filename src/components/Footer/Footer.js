import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    padding: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.bg };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    padding: 0;    
    margin: 0;
    list-style: none;    
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SAMI.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde commodi accusamus tenetur dolor, dolorum eos id deserunt velit at tempore!</Desc>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Quick Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center> 
            <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"15px"}}/> Malir Karachi, Pakistan</ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"15px"}}/> +92 313 2005014
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"15px"}}/> samiulhaq1810@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment image" />
            </Right>  
        </Container>
    )
}

export default Footer;
