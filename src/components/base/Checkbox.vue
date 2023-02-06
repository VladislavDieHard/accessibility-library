<template>
    <div class="custom-checkbox" @click="handleCheck">
        <div class="custom-checkbox--input">
            <template v-if="isChecked">
                <svg
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="custom-checkbox--icon"
                >
                    <g>
                        <polygon
                            class="st0"
                            points="440.469,73.413 218.357,295.525 71.531,148.709 0,220.229 146.826,367.055 218.357,438.587 289.878,367.055 512,144.945"
                        />
                    </g>
                </svg>
            </template>
        </div>
        <div class="custom-checkbox--describe">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: false,
    },
});
const emit = defineEmits(['update:modelValue']);
const isChecked = computed(() => props.modelValue);

const handleCheck = () => {
    emit('update:modelValue', !isChecked.value);
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 250px;
    height: 45px;

    &--input {
        width: 25px;
        height: 25px;
        background-color: white;
        border: 2px solid black;
    }

    &--icon {
        width: 100%;
    }

    &--describe {
        width: 220px;
        text-align: center;
        margin-left: 10px;
        font-weight: bold;
    }
}
</style>
