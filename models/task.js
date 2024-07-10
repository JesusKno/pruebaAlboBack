import { Schema, model } from "mongoose";


const schemaTasks = new Schema(
   {
        taskName: {
            type: String,
            required: true,
            trim: true
        },
        taskDescription: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true
        },
        responsiblePersonEmail: {
            type: String,
            required: true
        },
        taskComplete: {
            type: Boolean,
            default: false
        }
   },
   {
    timestamps: false,
   }
)

export default model("task", schemaTasks)