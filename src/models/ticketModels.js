import mongoose from 'mongoose';

function formatDate(date) {
    const d = new Date(date);
    const day = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2); 
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'in_progress', 'closed']
    },
    creationDate: {
        type: String,
        default: function () {
          return formatDate(new Date());
        }
      },
      lastUpdatedDate: {
        type: String,
        default: function () {
          return formatDate(new Date());
        }
      }
});

const TicketModel =  mongoose.model('TicketModel', ticketSchema);

export default TicketModel