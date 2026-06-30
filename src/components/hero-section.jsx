/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable quotes */

"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import {
    Cloud,
    renderSimpleIcon,
} from "react-icon-cloud";
import * as SI from "simple-icons";

// Built once at module load — zero network requests, instant
const slugToIcon = {};
Object.values(SI).forEach((icon) => {
    if (icon && icon.slug) slugToIcon[icon.slug] = icon;
});

export const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

export const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === "dark" ? "#080510" : "#f3f2ef";
    const fallbackHex = "#9ca3af"; // uniform silver-grey for all icons

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio: 999, // always use fallbackHex — no brand colors
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

export function IconCloud({ iconSlugs }) {
    const { theme } = useTheme();

    const renderedIcons = useMemo(() => (
        iconSlugs
            .map((slug) => slugToIcon[slug])
            .filter(Boolean)
            .map((icon) => renderCustomIcon(icon, theme || "light"))
    ), [iconSlugs, theme]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
