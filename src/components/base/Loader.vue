<template>
    <div class="loader">
        <svg x="0px" y="0px" viewBox="0 0 100 100">
            <rect
                fill="none"
                stroke="black"
                stroke-width="4"
                x="25"
                y="25"
                width="50"
                height="50"
            >
                <animateTransform
                    attributeName="transform"
                    dur="0.25s"
                    from="0 50 50"
                    to="180 50 50"
                    type="rotate"
                    id="strokeBox"
                    attributeType="XML"
                    begin="rectBox.end"
                />
            </rect>
            <rect x="27" y="27" fill="black" width="46" height="50">
                <animate
                    attributeName="height"
                    dur="0.66s"
                    attributeType="XML"
                    from="50"
                    to="0"
                    id="rectBox"
                    fill="freeze"
                    begin="0s;strokeBox.end"
                />
            </rect>
        </svg>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
    display: block;
    width: 150px;
}
</style>
