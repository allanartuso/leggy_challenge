const shareHolders = [
    { index: 0, name: "Commom", quote: 10 / 30, preference: 0, cap: 0, invested: 0 },
    { index: 1, name: "Preferred A", quote: 2 / 30, preference: 1, cap: 2, invested: 900000 },
    { index: 2, name: "Preferred B", quote: 3 / 30, preference: 1, cap: 2, invested: 2100000 },
    { index: 3, name: "Preferred C", quote: 15 / 30, preference: 1, cap: 2, invested: 15000000 },
];

export function getShareHolders() {
    return JSON.parse(JSON.stringify(shareHolders));
}

export const soldExamples = [
    60 * 1000000,
    25 * 1000000,
    35 * 1000000,
    45 * 1000000,
];

export const solds = [
    25 * 1000000,
    40 * 1000000,
    50 * 1000000,
    70 * 1000000,
    39 * 1000000,
    47 * 1000000,
];

export const combined = [
    ...soldExamples,
    ...solds
]

