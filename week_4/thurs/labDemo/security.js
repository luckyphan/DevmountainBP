/********************   Cryptography  *************************/
/**
 *      crypto = hidden/ secret
 *      graph = to write
 *      key = chnages the code
 * 
 *  Cipher
 *      plaintext = original message
 *      ciphertext = enciphered message 
 */

/********************   Caesar Cipher   *************************/
/**
 *  RUBBERDUCKISSAFE + 3 →
    UXEEHUGXFNLVVDIH

 */
/********************   Keys   *************************/
/**
    abcdefghijklmnopqrstuvwxyz
    key = zyxwvutsrqponmlkjihgfedcba

    Then, change each letter to key letter:
        RUBBERDUCKISSAFE + key →
        IFYYVIWFXPRHHZUV

    To decode, reverse process:
        IFYYVIWFXPRHHZUV + key →
        RUBBERDUCKISSAFE
*/

/********************   Brute Force   *************************/
/**
 *  break a code by trying all possible combinations
 *  so make an algorithm that isnt solve using brute force
 */

/********************   Digital Algorithms   *************************/
/*
    encrypt bits not letters
    Key length typically expresed in bits

        20-bit key length means 220 possible keys
        Each new bit makes brute force attack twice as hard

    DES
        “Data Encryption Standard”. From the 1970s. Uses a 56-bit key; no longer safe from well-funded cryptanalysis.

    Triple-DES
        DES three times in a row. Provides ~118-bit key length. Slow but secure.

    AES
        “Advanced Encryption Standard”. Available in three key lengths (128-, 192-, 256-bit). Extremely secure.

    Public Key Encryption
        A type of asymmetric encryption (different key to encrypt than decrypt)

        public key (tell everyone)
        private key (only owner knows)
            -decrypted vice versa
    
    public_key  = UKNOW
    private_key = IKNOW

    You encrypt with public key:

        RUBBERDUCKISSAFE + UKNOW →
        AFDFBJDFBDGDFBSFSE

    I decrypt with private key:

        AFDFBJDFBDGDFBSFSE + IKNOW →
        RUBBERDUCKISSAFE

    RSA
        trap door function , easy to do in one direction but arduous to do backwords

        Three numbers are found, d, e, n, which have trapdoor relationships

            Private key = (d, n)
            Public key = (e, n)
            It’s very hard to discover e from (d, n)
            It’s very hard to discover d from (e, n)
            http://www.muppetlabs.com/~breadbox/txt/rsa.html
*/

/********************   Basic Security Protocol *************************/
/**
 *  1. random session key
 *       make a random “session key” (example: XZJ)
 *  2. encipher with symmetric algorithm
 *       RUBBERDUCKISSAFE + XZJ →
         GJTXHJRAYRWSVWRQLO
    3. recover session key using private key
         FDFDFE - IKNOW →
         XZJ
    4. decrypt message with session key
         GJTXHJRAYRWSVWRQLO - XZJ →
         UBBERDUCKISSAFE
    5. send both cipher text and encoded session key
    6. key never traveled in clear
 *      
 */

/********************   Digital Signature   *************************/
/**
 *  private key: encipher that decipherable with public key
 *      public_key  = UKNOW
        private_key = IKNOW

        I encrypt with private key:
        RUBBERDUCKISSAFE + IKNOW →
        BGFDVSFREGDGTGSASD

        Send both plaintext and signature

        Decrypt signature, confirm match:
        BGFDVSFREGDGTGSASD + UKNOW →
        RUBBERDUCKISSAFE

        Matches plaintext, authentic!

    hashes 
        one way conversion of data to fixed size result
        can be used to make sure file hasnt been changed/corrupted

        For signatures  
            authenticate by making sure they match
 */

/********************   Web Security Protocol *************************/
/**
 *  HTTPS
 *      wraped in TLS (transport layer security)
 *      used to use SSL (secure sockets layer)
 * 
 *  RSA - assymmetric
 *  AES - symmetric
 */