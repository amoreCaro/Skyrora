import React from "react";
import { Html, Head, Body, Container, Heading, Text, Button } from "@react-email/components";

const EmailTemplate = ({ username = "користувачу" }) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", padding: "20px" }}>
        <Container style={{ maxWidth: "600px", backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
          <Heading style={{ color: "#333" }}>Привіт, {username}!</Heading>
          <Text>Дякуємо за реєстрацію в нашому сервісі.</Text>
          <Button 
            href="https://yourwebsite.com/confirm" 
            style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Підтвердити акаунт
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
