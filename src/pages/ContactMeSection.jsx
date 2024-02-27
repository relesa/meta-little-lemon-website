import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "../layout/FullScreenSection";
import useSubmit from "../hooks/useSubmit/useSubmit";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await submit(values.firstName); 
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      type: Yup.string().required('Type of occasion is required'),
      datetime: Yup.string().required('Time is required'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reservations
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps('firstName')}
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps('email')}
                  type="email"
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <Select 
                  {...formik.getFieldProps('type')}
                  bg="white"
                  color="black"
                >
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="numGuests">Number of guests</FormLabel>
                <Input
                  {...formik.getFieldProps('numGuests')}
                  type="number"
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.datetime && formik.errors.datetime}>
                <FormLabel htmlFor="datetime">Date and Time</FormLabel>
                <Input
                  {...formik.getFieldProps('datetime')}
                  type="datetime-local"
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.datetime}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="green" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );

};

export default LandingSection;
