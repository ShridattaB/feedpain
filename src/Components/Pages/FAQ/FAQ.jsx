import "./faq.css";
// ** MUI Imports
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TabContext from "@mui/lab/TabContext";
import MuiTabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// ** Custom Components Imports
import { useState } from "react";
import CustomAvatar from "./../../Avatar/Avatar";

// Styled TabList component
const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const TabList = styled(MuiTabList)(({}) => ({
  minHeight: 40,
  "& .MuiTabs-flexContainer": {
    flexDirection: "column",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    minHeight: 40,
    minWidth: 280,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    borderRadius: "6px",
    "& svg": {
      marginBottom: 0,
      marginRight: "0.5rem",
    },
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "#696CFF",
    },
  },
}));
const data = {
  faqData: {
    // payment
    payment: {
      id: "payment",
      title: "Payment",
      icon: "bx:credit-card",
      subtitle: "Get help with payment",
      qandA: [
        {
          id: "order-payment",
          question: "When is payment taken for my order?",
          answer:
            "Payment is taken during the checkout process when you pay for your order. The order number that appears on the confirmation screen indicates payment has been successfully processed.",
        },
        {
          id: "order",
          question: "How do I pay for my order?",
          answer:
            "We accept Visa®, MasterCard®, American Express®, and PayPal®. Our servers encrypt all information submitted to them, so you can be confident that your credit card information will be kept safe and secure.",
        },
        {
          id: "placing-order",
          question: "What should I do if I'm having trouble placing an order?",
          answer:
            "For any technical difficulties you are experiencing with our website, please contact us at our support portal, or you can call us toll-free at 1-000-000-000, or email us at order@companymail.com",
        },
        {
          id: "users-license",
          question:
            "Which license do I need for an end product that is only accessible to paying users?",
          answer:
            "If you have paying users or you are developing any SaaS products then you need an Extended License. For each products, you need a license. You can get free lifetime updates as well.",
        },
        {
          id: "subscription-review",
          question: "Does my subscription automatically renew?",
          answer:
            "No, This is not subscription based item.Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps.",
        },
      ],
    },

    // delivery
    delivery: {
      id: "delivery",
      title: "Delivery",
      icon: "bx:cart",
      subtitle: "Get help with delivery",
      qandA: [
        {
          id: "ship-order",
          question: "How would you ship my order?",
          answer:
            "For large products, we deliver your product via a third party logistics company offering you the “room of choice” scheduled delivery service. For small products, we offer free parcel delivery.",
        },
        {
          id: "delivery-cost",
          question: "What is the delivery cost of my order?",
          answer:
            "The cost of scheduled delivery is $69 or $99 per order, depending on the destination postal code. The parcel delivery is free.",
        },
        {
          id: "product-damaged",
          question: "What to do if my product arrives damaged?",
          answer:
            "We will promptly replace any product that is damaged in transit. Just contact our support team, to notify us of the situation within 48 hours of product arrival.",
        },
      ],
    },

    // cancellation and return
    cancellationReturn: {
      icon: "bx:rotate-left",
      id: "cancellation-return",
      title: "Cancellation & Return",
      subtitle: "Get help with cancellation & return",
      qandA: [
        {
          id: "cancel-order",
          question: "Can I cancel my order?",
          answer:
            "Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund. Parcel delivery orders cannot be cancelled, however a free return label can be provided upon request.",
        },
        {
          id: "product-return",
          question: "Can I return my product?",
          answer:
            "You can return your product within 15 days of delivery, by contacting our support team, All merchandise returned must be in the original packaging with all original items.",
        },
        {
          id: "return-status",
          question: "Where can I view status of return?",
          answer:
            "Locate the item from Your Orders. Select Return/Refund status",
        },
      ],
    },

    // my orders
    myOrders: {
      id: "my-orders",
      title: "My Orders",
      icon: "bx-cube",
      subtitle: "Order details",
      qandA: [
        {
          id: "order-success",
          question: "Has my order been successful?",
          answer:
            "All successful order transactions will receive an order confirmation email once the order has been processed. If you have not received your order confirmation email within 24 hours, check your junk email or spam folder. Alternatively, log in to your account to check your order summary. If you do not have a account, you can contact our Customer Care Team on 1-000-000-000.",
        },
        {
          id: "promo-code",
          question: "My Promotion Code is not working, what can I do?",
          answer:
            "If you are having issues with a promotion code, please contact us at 1 000 000 000 for assistance.",
        },
        {
          id: "track-orders",
          question: "How do I track my Orders?",
          answer:
            "If you have an account just sign into your account from here and select “My Orders”. If you have a a guest account track your order from here using the order number and the email address.",
        },
      ],
    },

    // product and services
    productServices: {
      icon: "bx:cog",
      id: "product-services",
      title: "Product & Services",
      subtitle: "Get help with product & services",
      qandA: [
        {
          id: "shipping-notification",
          question: "Will I be notified once my order has shipped?",
          answer:
            "Yes, We will send you an email once your order has been shipped. This email will contain tracking and order information.",
        },
        {
          id: "warranty-notification",
          question: "Where can I find warranty information?",
          answer:
            "We are committed to quality products. For information on warranty period and warranty services, visit our Warranty section here.",
        },
        {
          id: "warranty-coverage",
          question: "How can I purchase additional warranty coverage?",
          answer:
            "For the peace of your mind, we offer extended warranty plans that add additional year(s) of protection to the standard manufacturer’s warranty provided by us. To purchase or find out more about the extended warranty program, visit Extended Warranty section here.",
        },
      ],
    },
  },
};
const FAQ = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const handleChange = (e, tab) => setActiveTab(tab);
  const renderTabContent = () => {
    return Object.values(data.faqData).map((tab) => {
      return (
        <TabPanel
          key={tab.id}
          value={tab.id}
          sx={{
            p: 0,
            border: 0,
            width: "100%",
            boxShadow: 0,
            backgroundColor: "transparent",
            mr: [0, 0, 2],
          }}
        >
          <Box key={tab.id}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CustomAvatar
                skin="light"
                variant="rounded"
                sx={{ height: 42, width: 42 }}
              >
                <BlindsClosedIcon />
              </CustomAvatar>
              <Box sx={{ ml: 4 }}>
                <Typography variant="h5">{tab.title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {tab.subtitle}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              {tab.qandA.map((item) => {
                return (
                  <Accordion key={item.id} className="tab-accordion">
                    <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                      <Typography sx={{ fontWeight: "500" }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: "text.secondary" }}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Box>
        </TabPanel>
      );
    });
  };

  const renderTabs = () => {
    if (data !== null) {
      return Object.values(data.faqData).map((tab) => {
        if (tab.qandA.length) {
          return (
            <Tab
              key={tab.id}
              value={tab.id}
              label={tab.title}
              icon={<BlindsClosedIcon />}
            />
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  return (
    <MuiBox className="faq" style={{ marginTop: "14px", height: "100%" }}>
      <TabContext value={activeTab}>
        <Box
          sx={{
            mr: [0, 0, 6],
            mb: [6, 6, 0],
            ml: [0, 0, 2],
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TabList
            onChange={handleChange}
            style={{
              height: "100%",
            }}
          >
            {renderTabs()}
          </TabList>
          <Box
            sx={{
              mt: 9,
              "& img": { maxWidth: "100%" },
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              width="200"
              alt="illustration"
              src={`/images/pages/sitting-girl-with-laptop-light.png`}
            />
          </Box>
        </Box>
        {renderTabContent()}
      </TabContext>
    </MuiBox>
  );
};

export default FAQ;
