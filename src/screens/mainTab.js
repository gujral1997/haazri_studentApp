import React, { Component } from "react";
import subject1 from './subject1';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  Text,
} from "native-base";
import { ScrollView } from "react-native";

class mainTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          title: "Page 1",
          content:
            " One One One One One One One One One One One One One One One One One One One One One One One One One One One ",
        },
        {
          title: "Page 2",
          content:
            "Two Two Two Two  Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two ",
        },
        {
          title: "Page 3",
          content:
            "Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three ",
        },
      ],
    };
  }

  tabChanged(page) {
    console.log("Tab changed");
  }

  handleScroll(event) {
    console.log("Handled scroll event");
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Basic Tabs</Title>
          </Body>
          <Right />
        </Header>

        <Tabs
          initialPage={0}
          onChangeTab={page => this.tabChanged(page)}
          locked={false}
          style={{ backgroundColor: "white" }}
        >
          {this.state.listData.length > 0 &&
            this.state.listData.map((data, index) => (
              <Tab
                key={index}
                tabStyle={{
                  backgroundColor: "#29b6f6",
                  borderBottomWidth: 3,
                  borderBottomColor: "#576d7a",
                }}
                textStyle={{ color: "#556c7a", fontWeight: "normal" }}
                activeTabStyle={{
                  backgroundColor: "#29b6f6",
                  borderBottomWidth: 3,
                  borderBottomColor: "#576d7a",
                }}
                activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
                heading={data.title}
              >
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  onScroll={event => this.handleScroll(event)}
                >
                  <Text>{data.content}</Text>
                </ScrollView>
              </Tab>
            ))}
        </Tabs>
      </Container>
    );
  }
}

export default mainTab;
