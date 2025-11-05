"use client"

import type React from "react"

import { UnstyledButton, Text } from "@mantine/core"
import styles from "./Button.module.css"
import Link from "next/link"

interface CustomButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const ButtonOutline = ({ children, onClick }: CustomButtonProps) => {
  return (
    <UnstyledButton
      className={styles.customButton}
      component={Link}
      href="https://www.instagram.com/coolnailbydaisy/?igsh=MXJtN2pwOXpiMmVzaQ%3D%3D&utm_source=qr"
      target="_blank"
      onClick={onClick}
    >
      <Text className={styles.buttonText}>{children}</Text>
    </UnstyledButton>
  )
}
