'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navConfig } from '@/constants/uiConstants'
import { LinkItem } from '@/types/ui'

interface NavLinkProps {
    item: LinkItem
    onClick?: () => void
}

function NavLink({ item, onClick }: NavLinkProps) {
    return (
        <Link
            href={item.href}
            passHref
            onClick={onClick}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
            </NavigationMenuLink>
        </Link>
    )
}

interface NavDropdownProps {
    item: LinkItem
    onClick?: () => void
}

function NavDropdown({ item, onClick }: NavDropdownProps) {
    return (
        <>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                            <Link
                                href={item.href}
                                className="bg-linear-to-b from-secondary/50 to-secondary/80 text-white flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md">
                                <div className="mt-4 mb-2 text-lg font-medium">{item.title}</div>
                                {item.description && (
                                    <p className="text-muted-foreground text-sm leading-tight">
                                        {item.description}
                                    </p>
                                )}
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    {item.children?.map(child => (
                        <ListItem
                            key={child.href}
                            href={child.href}
                            title={child.title}
                            onClick={onClick}>
                            {child.description}
                        </ListItem>
                    ))}
                </ul>
            </NavigationMenuContent>
        </>
    )
}

interface LinkItemRendererProps {
    item: LinkItem
    onClick?: () => void
}

function LinkItemRenderer({ item, onClick }: LinkItemRendererProps) {
    if (item.children && item.children.length > 0) {
        return (
            <NavigationMenuItem>
                <NavDropdown
                    item={item}
                    onClick={onClick}
                />
            </NavigationMenuItem>
        )
    }

    return (
        <NavigationMenuItem>
            <NavLink
                item={item}
                onClick={onClick}
            />
        </NavigationMenuItem>
    )
}

function MobileLinkItemRenderer({ item, onClick }: LinkItemRendererProps) {
    if (item.children && item.children.length > 0) {
        return (
            <div className="py-2">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="pl-4 space-y-2">
                    <SheetClose asChild>
                        <Link
                            href={item.href}
                            className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={onClick}>
                            {item.title} Overview
                        </Link>
                    </SheetClose>
                    {item.children?.map(child => (
                        <SheetClose
                            key={child.href}
                            asChild>
                            <Link
                                href={child.href}
                                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={onClick}>
                                {child.title}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <SheetClose asChild>
            <Link
                href={item.href}
                className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                onClick={onClick}>
                {item.title}
            </Link>
        </SheetClose>
    )
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => setIsOpen(false)

    return (
        <NavigationMenu className="max-w-full sticky top-0 bg-background">
            <div className="max-w-7xl mx-auto w-full">
                <div className="w-full flex items-center justify-between p-4">
                    <Link href="/">
                        <Image
                            src="/assets/logo.svg"
                            alt="website logo"
                            width={300}
                            height={50}
                            className="w-[165px] h-auto object-cover overflow-hidden"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenuList className="relative hidden md:flex">
                        {navConfig.map(item => (
                            <LinkItemRenderer
                                key={item.href}
                                item={item}
                            />
                        ))}
                        <Button className="hidden md:block">Book a Call</Button>
                    </NavigationMenuList>

                    {/* Mobile Navigation */}
                    <Sheet
                        open={isOpen}
                        onOpenChange={setIsOpen}>
                        <SheetTrigger
                            asChild
                            className="md:hidden">
                            <Button size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className="w-full h-auto pt-20">
                            <div className="flex flex-col space-y-4">
                                {navConfig.map(item => (
                                    <MobileLinkItemRenderer
                                        key={item.href}
                                        item={item}
                                        onClick={handleClose}
                                    />
                                ))}
                                <Button className="w-full">Book a Call</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    onClick,
    ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string; onClick?: () => void }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-accent/90 hover:text-white focus:bg-accent/90 focus:text-white"
                    onClick={onClick}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug group-hover:text-white/90">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
