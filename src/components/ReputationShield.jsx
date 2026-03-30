import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle, ExternalLink } from 'lucide-react';

const ReputationShield = ({ restaurantName, googleMapsLink }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleShieldLogic = () => {
    if (rating >= 4) {
      // Redirect to Google Maps if they are happy
      window.open(googleMapsLink, '_blank');
    }
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '25px', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
      {!submitted ? (
        <>
          <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '10px' }}>How was your experience?</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>Help {restaurantName} improve!</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '30px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={35}
                fill={rating >= star ? "#facc15" : "none"}
                color={rating >= star ? "#facc15" : "#cbd5e1"}
                onClick={() => setRating(star)}
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              />
            ))}
          </div>

          {rating > 0 && (
            <div style={{ animation: 'fadeIn 0.4s' }}>
              <textarea
                placeholder={rating >= 4 ? "What did you love most?" : "What can we do better? (Private to manager)"}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '15px', height: '80px' }}
              />
              <button 
                onClick={handleShieldLogic}
                style={{ width: '100%', padding: '15px', background: '#1e293b', color: 'white', borderRadius: '12px', border: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                {rating >= 4 ? "Post Review & Get Reward" : "Submit Private Feedback"}
                <Send size={18}/>
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', animation: 'scaleIn 0.3s' }}>
          <CheckCircle size={50} color="#22c55e" style={{ margin: '0 auto 15px' }} />
          <h3>Thank You!</h3>
          <p style={{ color: '#64748b', fontSize: '14px' }}>
            {rating >= 4 
              ? "Your 5-star review helps us grow. Show this screen to the waiter for your surprise!" 
              : "Your feedback has been sent directly to the owner for immediate action."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReputationShield;