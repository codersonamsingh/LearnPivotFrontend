"use client";
import { useState } from "react";
import Header from "../Components/Header1/Header";
import "./classes.css";
import { Container, Typography, Grid, Breadcrumbs, Divider, Tabs, Tab } from "@mui/material";
import Footer, { NewFooter } from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Enquiry from "@/app/Components/Enquiry/Enquiry";
import OneClass from "../Components/PublicPage/Classes/OneClass";
import FilterComponent from "../Components/PublicPage/Classes/FilterComponent";

function Events() {
  const [tabValue, setTabValue] = useState(0);

  const [events] = useState([
    
        {
          month: "February 2024",
          img: "https://img.freepik.com/free-vector/flat-design-english-school-background_23-2149485957.jpg?w=900&t=st=1706446104~exp=1706446704~hmac=1793f247f123d53401121af165d35788ac318e724b2ed7485971e8e773ae2044",
          timing: "February 21, 2024 @ 10:00AM to 12 Noon",
          title: "Mastering English Grammar",
          subTitle: "Join our comprehensive session on mastering English grammar rules and usage.",
          _id: "541564515545451",
        },
     
  ]);

  const router = useRouter();

  const handleTabChange = (event, value) => {
    setTabValue(value);
    const target = value === 0 ? "#upcoming" : "#past";
    router.push(target);
  };

  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Header />
      {/* Consider whether you need the TopAbstract component here */}
      <br />
      <Container>
      <Grid container spacing={3}>
      <Grid item xs={2}>
        <FilterComponent />
      </Grid>
      
      <Grid item xs={10}>
      {events &&
                  events.map((p, j) => (

                    <OneClass  key={j} img={p.img} title={p.title} timing={p.timing} subTitle={p.subTitle} />
                  ))}
      </Grid>
    </Grid>
      </Container>
      <Enquiry />
      <Footer />
    </main>
  );
}

export default Events;
