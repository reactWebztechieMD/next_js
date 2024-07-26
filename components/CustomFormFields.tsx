"use client"
import React from 'react'
import {  FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { EnumValues } from 'zod'
  interface CustomProps {
    Control : Control<any>,
    name:String,
    placholder:String,
    descriptions :string ,
    type : EnumValues
  }
const CustomFormFields = ({ Control , name , placholder , descriptions , type }:CustomProps) => {
  return (
    <FormField
    control={Control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input   placeholder={placholder} {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default CustomFormFields